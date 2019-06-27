'use strict';

const priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const notepad = {
  notes: [
    {
      id: 'id-1',
      title: 'HTML',
      body: 'Lorem ipsum dolor sit amet.',
      priority: priority.LOW,
    },
    {
      id: 'id-2',
      title: 'CSS',
      body: 'Lorem ipsum dolor sit amet.',
      priority: priority.NORMAL,
    },
    {
      id: 'id-3',
      title: 'JavaScript',
      body: 'Lorem ipsum dolor sit amet.',
      priority: priority.HIGH,
    },
  ],

  getNotes() {
    return this.notes;
  },
  findNoteById(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i] === id) {
        return this.notes[i];
      }
    }
  },
  saveNote(note) {
    this.notes.push(note);
    return note;
  },
  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id) {
        this.notes.splice(i, 1);
        return;
      }
    }
  },
  updateNoteContent(id, updatedContent) {
    for (let i = 0; i < this.notes.length; i += 1) {
      if (id === this.notes[i].id) {
         this.notes[i] = { ...this.notes[i], ...updatedContent };
         return this.notes;
      }
    }
  },
  updateNotePriority(id, priority) {
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id) {
        this.notes[i].priority = priority;
        return this.notes[i];
      }
    }
  },
  filterNotesByQuery(query) {
    const filtered = [];
    for (const filter of this.notes) {
      if (
        filter.title.toLowerCase().includes(query.toLowerCase()) ||
        filter.body.toLowerCase().includes(query.toLowerCase())
      ) {
        filtered.push(filter);
        return filtered;
      }
    }
  },
  filterNotesByPriority(priority) {
    const filtered = [];
    for (const filter of this.notes) {
      if (filter.priority === priority) {
        filtered.push(filter);
        return filtered;
      }
    }
  },
};

// ===================================================================================
/*
 * Добавляю 4 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: 'id-4',
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: priority.HIGH,
});

notepad.saveNote({
  id: 'id-5',
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: priority.NORMAL,
});

notepad.saveNote({
  id: 'id-6',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: priority.NORMAL,
});

notepad.saveNote({
  id: 'id-7',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-7', priority.NORMAL);

console.log(
  'Заметки после обновления приоритета для id-7: ',
  notepad.getNotes(),
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-6', priority.LOW);

console.log(
  'Заметки после обновления приоритета для id-6: ',
  notepad.getNotes(),
);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('HTML'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(priority.NORMAL),
);

/*
 * Обновим контент заметки с id-6
 */
notepad.updateNoteContent('id-6', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-6: ',
  notepad.getNotes(),
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());
