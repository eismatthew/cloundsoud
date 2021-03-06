import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
});

const receiveErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});


export const fetchAllTracks = () => dispatch => (
  TrackAPIUtil.fetchAllTracks()
  .then(tracks => (dispatch(receiveTracks(tracks))),
      errors => (dispatch(receiveErrors(errors.responseJSON))  
  ))
);

export const fetchTrack = trackId => dispatch => (
  TrackAPIUtil.fetchTrack(trackId)
  .then(track => (dispatch(receiveTrack(track))),
      errors => (dispatch(receiveErrors(errors.responseJSON))
      ))
);


export const createTrack = track => dispatch => (
  TrackAPIUtil.createTrack(track)
  .then(track => (dispatch(receiveTrack(track))),
    errors => (dispatch(receiveErrors(errors.responseJSON))
    ))
);


export const deleteTrack = trackId => dispatch => (
  TrackAPIUtil.deleteTrack(trackId)
  .then(track => (dispatch(removeTrack(track))),
    errors => (dispatch(receiveErrors(errors.responseJSON))
    ))
);


export const updateTrack = track => dispatch => (
  TrackAPIUtil.updateTrack(track)
  .then(track => (dispatch(receiveTrack(track))),
     errors => (dispatch(receiveErrors(errors.responseJSON))
     ))
);





    
// export const fetchAllTracks = () => dispatch =>
// TrackAPIUtil.fetchAllTracks()
// .then(tracks => dispatch(receiveTracks(tracks)))
//   .fail(errors => dispatch(receiveErrors(errors.responseJSON)));