import React from 'react';
import { iTrack } from '../types';

interface iProps {
  searchedTracks: iTrack[]
}

const Results = ({searchedTracks}: iProps) => {
  return (
    <div className="results">
      {Array.isArray(searchedTracks) && searchedTracks.map((track: iTrack) => {
        return (
          <div className="track" key={`${track.id}-${track.title}`}>
            <p className="track__title">{track.title}</p>
            <div className="track__inner-container">
              <p className="track__id">{track.id}</p>
              <p className="track__artist">{track.artist}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Results;