import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const tronMiddleware = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    tronMiddleware(),
  ),
);

sagaMiddleware.run(sagas);

export default store;

// import { createStore, applyMiddleware, compose } from 'redux';

// import createSagaMiddleware from 'redux-saga';
// import reducers from './ducks';
// import sagas from './sagas';

// const middlewares = [];

// const sagaMiddleware = createSagaMiddleware();
// middlewares.push(sagaMiddleware);

// /**
//  * consegui fazer funcionar apenas com a extensao no chrome com redux,
//  * redux-saga não consegui fazer
//  */
// const composeEnhancers = typeof window === 'object'
//   && process.env.NODE_ENV === 'development'
//   && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) // eslint-disable-line
//   : compose;

// const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

// sagaMiddleware.run(sagas);

// export default store;
