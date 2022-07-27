import React from "react";

import { STAGE_WIDTH } from "../setup";
import { isColliding, randomTetromino } from "../gameHelpers";
import { STAGE } from "../components/Stage/Stage";

export type PLAYER = {
  pos: {
    x: number;
    y: number;
  };
  tetromino: (string | number)[][];
  collided: boolean;
};

export const usePlayer = () => {
  const [player, setPlayer] = React.useState({} as PLAYER);

  const rotate = (matrix: PLAYER["tetromino"]) => {
    // Make the rows to become cols (transpose)
    const mtrx = matrix.map((_, i) => matrix.map((column) => column[i]));
    // Reverse each row to get a rotated matrix
    return mtrx.map((row) => row.reverse());
  };

  const playerRotate = (stage: STAGE): void => {
    const clonedPLayer = JSON.parse(JSON.stringify(player));
    clonedPLayer.tetromino = rotate(clonedPLayer.tetromino);

    // This one is so the player can't rotate into the wall or other tetrominos
    const posX = clonedPLayer.pos.x;
    let offset = 1;
    while (isColliding(clonedPLayer, stage, { x: 0, y: 0 })) {
      clonedPLayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));

      if (offset > clonedPLayer.tetromino[0].length) {
        clonedPLayer.pos.x = posX;
        return;
      }
    }

    setPlayer(clonedPLayer);
  };

  const updatePLayerPos = ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }): void => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = React.useCallback(
    (): void =>
      setPlayer({
        pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
        tetromino: randomTetromino().shape,
        collided: false,
      }),
    []
  );

  return { player, updatePLayerPos, resetPlayer, playerRotate };
};
