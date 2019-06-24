'use strict';

class Notepad {
  static PRIORITY_TYPES = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };
  static ICON_TYPES = {
    EDIT: 'edit',
    DELETE: 'delete',
    ARROW_DOWN: 'expand_more',
    ARROW_UP: 'expand_less',
  };
  static NOTE_ACTIONS = {
    DELETE: 'delete-note',
    EDIT: 'edit-note',
    INCREASE_PRIORITY: 'increase-priority',
    DECREASE_PRIORITY: 'decrease-priority',
  };
  constructor(notes) {
    this._notes = notes;
  }
  get notes() {
    return this._notes;
  }
  saveNote(note) {
    this._notes.push(note);
    return note;
  }
  findNoteById(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const product = this.notes[i];
      if (product.id === id) {
        return this.notes[i];
      }
    }
  }
  updateNotePriority(id, priority) {
    const findPriority = priority;
    for (let i = 0; i < this.notes.length; i += 1) {
      const product = this.notes[i];
      if (product.id === id) {
        product.priority = findPriority;
        return product;
      }
    }
  }
  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const product = this.notes[i];
      if (product.id === id) {
        this.notes.splice(i, 1);
        return;
      }
    }
  }
  updateNoteContent = function(id, updatedContent) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const product = this.notes[i];
      if (product.id === id) {
        product.title = updatedContent;
        return product;
      }
    }
  };
  filterNotesByQuery = function(query) {
    const filtered = [];
    const findString = query;
    for (const filter of this.notes) {
      if (
        filter.title.includes(findString) ||
        filter.body.includes(findString)
      ) {
        filtered.push(filter);
      }
    }
    return filtered;
  };
  filterNotesByPriority = function(priority) {
    const filtered = [];
    for (const filter of this.notes) {
      if (filter.priority === priority) {
        filtered.push(filter);
      }
    }
    return filtered;
  };
}

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Notepad.PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Notepad.PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Notepad.PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Notepad.PRIORITY_TYPES.LOW,
  },
];
const notepad = new Notepad(initialNotes);
console.log('Все текущие заметки: ', notepad.notes);

const profileContainer = document.querySelector('.note-list');
const profile = renderNoteList(notepad.notes);

console.log(profileContainer);

function renderNoteList(listRef, notes) {
  const field1 = createListItem(listRef.find(note => note.id === 'id-1'));
  const field2 = createListItem(listRef.find(note => note.id === 'id-2'));
  const field3 = createListItem(listRef.find(note => note.id === 'id-3'));
  const field4 = createListItem(listRef.find(note => note.id === 'id-4'));
  profileContainer.append(field1, field2, field3, field4);
  console.log(field1);
  return;
}

function createListItem(note) {
  const item = document.createElement('li');
  item.dataset.id = note.id;
  item.classList.add('note-list__item');
  const itemNote = document.createElement('div');
  itemNote.classList.add('note');
  item.append(itemNote);
  const itemNoteContent = document.createElement('div');
  itemNoteContent.classList.add('note__content');
  itemNote.append(itemNoteContent);
  const itemNoteTitle = document.createElement('h2');
  itemNoteTitle.textContent = note.title;
  itemNoteTitle.classList.add('note__title');
  itemNoteContent.append(itemNoteTitle);
  const itemNoteBody = document.createElement('p');
  itemNoteBody.textContent = note.body;
  itemNoteBody.classList.add('note__body');
  itemNoteTitle.append(itemNoteBody);
  const noteFooter = document.createElement('footer');
  noteFooter.classList.add('note__footer');
  itemNote.append(noteFooter);

  const noteSection = document.createElement('section');
  noteSection.classList.add('note__section');
  noteFooter.append(noteSection);
  const action = createActionButton();
  action.dataset.action = Notepad.NOTE_ACTIONS.DECREASE_PRIORITY;
  noteSection.append(action);
  const actionIcon = document.createElement('i');
  actionIcon.classList.add('material-icons', 'action__icon');
  actionIcon.textContent = Notepad.ICON_TYPES.ARROW_DOWN;
  action.append(actionIcon);
  const action1 = createActionButton();
  action1.dataset.action = Notepad.NOTE_ACTIONS.INCREASE_PRIORITY;
  noteSection.append(action1);
  const actionIcon1 = document.createElement('i');
  actionIcon1.classList.add('material-icons', 'action__icon');
  actionIcon1.textContent = Notepad.ICON_TYPES.ARROW_UP;
  action1.append(actionIcon1);

  const noteSection1 = document.createElement('section');
  noteSection1.classList.add('note__section');
  noteFooter.append(noteSection1);
  const action2 = createActionButton();
  action2.dataset.action = Notepad.NOTE_ACTIONS.EDIT;
  noteSection1.append(action2);
  const actionIcon2 = document.createElement('i');
  actionIcon2.classList.add('material-icons', 'action__icon');
  actionIcon2.textContent = Notepad.ICON_TYPES.EDIT;
  action2.append(actionIcon2);
  const action3 = createActionButton();
  action3.dataset.action = Notepad.NOTE_ACTIONS.DELETE;
  noteSection1.append(action3);
  const actionIcon3 = document.createElement('i');
  actionIcon3.classList.add('material-icons', 'action__icon');
  actionIcon3.textContent = Notepad.ICON_TYPES.DELETE;
  action3.append(actionIcon3);

  const notePriority = document.createElement('span');
  notePriority.classList.add('note__priority');
  notePriority.textContent = Notepad.PRIORITY_TYPES.LOW;
  noteSection.append(notePriority);

  return item;
}

function createActionButton() {
  const action = document.createElement('button');
  action.classList.add('action', 'data-action');

  return action;
}
