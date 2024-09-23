import React from "react";

import {
  VirtuosoMessageListLicense,
  VirtuosoMessageList,
} from "@virtuoso.dev/message-list";

export default function MessageList() {
  const ref = React.useRef(null);
  const offset = React.useRef(0);

  return (
    <>
      <button
        onClick={() => {
          offset.current = offset.current - 10;
          ref.current.data.prepend(
            Array.from({ length: 10 }, (_, index) => index + offset.current),
          );
        }}
      >
        Prepend 10 items
      </button>

      <VirtuosoMessageListLicense licenseKey="">
        <VirtuosoMessageList
          ItemContent={({ data }) => <div>{data}</div>}
          ref={ref}
          style={{ height: 400 }}
          initialData={Array.from({ length: 100 }, (_, index) => index)}
        />
      </VirtuosoMessageListLicense>
    </>
  );
}
