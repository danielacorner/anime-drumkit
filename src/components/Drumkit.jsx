import React from 'react';
import { DrumButtonStyles, DrumkitStyles } from './styles/DrumkitStyles';

const handleAddSoundClick = () => {
  console.log('add another button!');
};

const handleStartRecording = () => {
  console.log('start recording!');
};
const handleStopRecording = () => {
  console.log('stop recording!');
};

const DrumButton = () => {
  return (
    <DrumButtonStyles>
      <button
        onMouseDown={handleStartRecording}
        onMouseUp={handleStopRecording}
      >
        🔴
      </button>
      <div>
        <input contentEditable type="text" defaultValue="Name me!" />
      </div>
    </DrumButtonStyles>
  );
};

const Drumkit = () => {
  const [savedRecords, setSavedRecords] = React.useState([]);
  const [isRecording, setIsRecording] = React.useState(false);

  return (
    <DrumkitStyles>
      <div className="buttonsDiv">
        {/* TODO: output a drum button for each sound */}
        <DrumButton />
      </div>
      <div className="addAButtonDiv">
        <button onClick={handleAddSoundClick}>Add Another Sound!</button>
        {/* TODO: count the number of DrumButtons */}
        <small>total sounds: #DrumButtons</small>
      </div>
    </DrumkitStyles>
  );
};

// when you're done, upload this app to github pages! https://github.com/gitname/react-gh-pages

export default Drumkit;
