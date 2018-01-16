"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorAPI = require('../api/AuthorAPI');
var ActionTypes = require('../constants/ActionTypes');

var InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorAPI.getAllAuthors()
      }
    });
  }
};

module.exports = InitializeActions; 
