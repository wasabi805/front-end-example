import {Map, List} from 'immutable';

export const INITIAL_STATE = Map({
    info: Map({
        dotCount : 50,

        social: List([
            Map({name: 'pic_01', link: 'https://picsum.photos/200/300?image=91'}),
            Map({name: 'pic_02', link: 'https://picsum.photos/200/300?image=51'}),
            Map({name: 'pic_03', link: 'https://picsum.photos/200/300?image=31'}),
        ])
    }),
});