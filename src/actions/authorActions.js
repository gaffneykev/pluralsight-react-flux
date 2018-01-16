"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorAPI = require('../api/AuthorAPI');
var ActionTypes = require('../constants/ActionTypes');

var AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorAPI.saveAuthor(author);
    //Hey dispatcher go tell all the stores that an author was just created
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  },

  updateAuthor: function(author) {
    var updatedAuthor = AuthorAPI.saveAuthor(author);
    
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    });
  }
};

module.exports = AuthorActions;
