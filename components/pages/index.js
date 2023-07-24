import React from "react";
import Navbar from "../common/navbar";
import Products from "../products/productList";
import {
  WebChatContainer,
  setEnableDebug,
} from "@ibm-watson/assistant-web-chat-react";
import { config } from "@/helpers/config";
import { store } from "@/redux/store";
import { addItem } from "@/redux/slices/cart.slice";

setEnableDebug(true);

const webChatOptions =
  process.env.NODE_ENV === "production"
    ? {
        integrationID: "361716ee-db18-404b-94c9-a4cb9f4aaa38", // The ID of this integration.
        region: "au-syd", // The region your integration is hosted in.
        serviceInstanceID: "91b891fe-b4ac-44ae-a877-360a1a9075d2", // The ID of your service instance.
        showCloseAndRestartButton: true,
      }
    : {
        integrationID: "bf974de7-7eb6-4d29-9b74-9b37eb4f108b", // The ID of this integration.
        region: "au-syd", // The region your integration is hosted in.
        serviceInstanceID: "91b891fe-b4ac-44ae-a877-360a1a9075d2", // The ID of your service instance.
        showCloseAndRestartButton: true,
      };

const HomePage = () => {
  const [instance, setInstance] = React.useState(null);
  return (
    <>
      <Navbar />
      <WebChatContainer
        config={webChatOptions}
        onBeforeRender={(instance) => onBeforeRender(instance, setInstance)}
      />
      <Products />
    </>
  );
};

function onBeforeRender(instance, setInstance) {
  // Make the instance available to the React components.
  instance.on({
    type: "receive",
    handler: (event) => receiveHandler(event),
  });
  setInstance(instance);

  // Do any other work you might want to do before rendering. If you don't need any other work here, you can just use
  // onBeforeRender={setInstance} in the component above.
}

function receiveHandler(event) {
  if (
    event?.data?.output?.debug?.turn_events &&
    event?.data.output.debug.turn_events.findIndex(
      (x) => x.event === "action_finished"
    ) > -1
  ) {
    const action_self = event.data.output.debug.turn_events.filter(
      (x) => x.event === "action_finished"
    )[0];

    if (
      action_self.action_variables[config.productNameVariableID] &&
      action_self.action_variables[config.productCountVariableID]
    ) {
      const product_record = config.products.filter(
        (x) =>
          x.name.toLocaleLowerCase() ===
          action_self.action_variables[
            config.productNameVariableID
          ].toLocaleLowerCase()
      );
      if (product_record.length > 0) {
        store.dispatch(
          addItem({
            ...product_record[0],
            qt: action_self.action_variables[config.productCountVariableID],
          })
        );
      }
    }
  }
}

export default HomePage;
