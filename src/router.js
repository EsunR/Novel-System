import Vue from 'vue'
import Router from 'vue-router'
import noFound from './components/noFound.vue'
// editor
import editor from './components/editor/editor.vue'
import createNovel from './components/editor/createNovel.vue'
import novelManager from './components/editor/novelManager.vue'
import income from './components/editor/income.vue'
import addChapter from  './components/editor/addChapter.vue'
import draft from './components/editor/draft.vue'
import editDraft from './components/editor/editDraft.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'noFound',
      component: noFound
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor,
      children: [
        {
          path: 'createNovel',
          component: createNovel
        },
        {
          path: 'novelManager',
          component: novelManager
        },
        {
          path: 'income',
          component: income
        },
        {
          path: 'addChapter/:id',
          component: addChapter
        },
        {
          path: 'draft',
          component: draft
        },
        {
          path: 'draft/:id',
          component: editDraft
        }
      ]
    }
  ]
})
