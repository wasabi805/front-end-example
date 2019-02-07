export const getDotItems01= ({Logic}) => Logic.getIn(['info' , 'social']).toJS();
export const getDotCount=({Logic})=> Logic.getIn(['info' , 'dotCount'])