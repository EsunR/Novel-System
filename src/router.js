import Vue from 'vue'
import Router from 'vue-router'
import noFound from './components/noFound.vue'
import home from './components/home.vue'
import newPublish from './components/newPublish.vue'
import search from './components/search.vue'

// user
import user from './components/user/user.vue'
import collection from './components/user/collection.vue'
import info from './components/user/info.vue'
import recharge from './components/user/recharge.vue'

// editor
import editor from './components/editor/editor.vue'
import createNovel from './components/editor/createNovel.vue'
import novelManager from './components/editor/novelManager.vue'
import income from './components/editor/income.vue'
import addChapter from './components/editor/addChapter.vue'
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
      path: '/',
      redirect: '/home'
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
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/home/newPublish',
      children: [
        {
          path: 'newPublish',
          component: newPublish
        },
        {
          path: 'search',
          component: search
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      redirect: '/user/collection',
      children: [
        {
          path: 'collection',
          component: collection
        },
        {
          path: 'info',
          component: info
        },
        {
          path: 'recharge',
          component: recharge
        }
      ]
    }
  ]
})
