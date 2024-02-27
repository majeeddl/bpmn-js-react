import React, { MouseEventHandler } from "react";
import { Stack, ActionIcon, MantineProvider, Button } from "@mantine/core";
import { IconZoomIn, IconZoomOut, IconViewfinder } from "@tabler/icons-react";

const ZoomActions = ({
  zoomIn = () => {},
  zoomOut = () => {},
  zoomFit = () => {},
}: {
  zoomIn?: MouseEventHandler;
  zoomOut?: MouseEventHandler;
  zoomFit?: MouseEventHandler;
}) => {
  return (
    <>
      <Button.Group orientation="vertical" style={{ width: 40 }}>
        {zoomIn && (
          <Button variant="default" size="compact-sm" onClick={zoomIn}>
            <IconZoomIn size={17} />
          </Button>
        )}
        {zoomOut && (
          <Button variant="default" size="compact-sm" onClick={zoomOut}>
            <IconZoomOut size={17} />
          </Button>
        )}
        {zoomFit && (
          <Button variant="default" size="compact-sm" onClick={zoomFit}>
            <IconViewfinder size={17} />
          </Button>
        )}
      </Button.Group>
    </>
  );
};

export default ZoomActions;
