import React from 'react';
import { getDefaultRun, Run } from '../../lib/run';

type AppHeaderProps = {
  hasSeed?: boolean;
  setRun: (run: Run) => void;
};

export const AppHeader = ({ hasSeed, setRun }: AppHeaderProps) => {
  const onQuit = () => {
    localStorage.removeItem('run');
    setRun(getDefaultRun());
  };
  return (
    <div className="header">
      <div className="caption">BotW All Shrines Randomizer</div>
      {hasSeed && (
        <button id="quit" className="btn-text btn-back" onClick={onQuit}>
          Quit run
        </button>
      )}
    </div>
  );
};