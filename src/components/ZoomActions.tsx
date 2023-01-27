import React from "react";
import { Stack, ActionIcon, MantineProvider, Button } from "@mantine/core";
import { IconZoomIn, IconZoomOut } from "@tabler/icons";

const ZoomActions = ({ zoomIn, zoomOut }:any) => {
  return (
    <>
      <Button.Group orientation="vertical" style={{ width: 40 }}>
        <Button
          variant="default"
          compact
          onClick={zoomIn}
          //   onClick={() => console.log(ref.current.zoomIn())}
        >
          <IconZoomIn size={17} />
        </Button>
        <Button variant="default" compact onClick={zoomOut}>
          <IconZoomOut size={17} />
        </Button>
      </Button.Group>
    </>
  );
};

export default ZoomActions;
