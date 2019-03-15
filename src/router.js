import Vue from 'vue'
import Router from 'vue-router'
import noFound from './components/noFound.vue'

// home
import home from './components/home.vue'
import newPublish from './components/newPublish.vue'
import search from './components/search.vue'
import ranking from './components/ranking.vue'
import recommend from './components/recommend.vue'
import customerService from './components/customerService.vue'

// user
import user from './components/user/user.vue'
import collection from './components/user/collection.vue'
import info from './components/user/info.vue'
import recharge from './components/user/recharge.vue'
import bought from './components/user/bought.vue'

// editor
import editor from './components/editor/editor.vue'
import createNovel from './components/editor/createNovel.vue'
import novelManager from './components/editor/novelManager.vue'
import income from './components/editor/income.vue'
import addChapter from './components/editor/addChapter.vue'
import draft from './components/editor/draft.vue'
import editDraft from './components/editor/editDraft.vue'

// novel
import novel from './components/novel.vue'
import chapter from './components/chapter.vue'

// admin
import admin from './components/admin/admin.vue'
import userList from './components/admin/userList.vue'
import novelList from './components/admin/novelList.vue'
import reportList from './components/admin/reportList.vue'
import feedback from './components/admin/feedback.vue'


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
        },
        {
          path: 'ranking',
          component: ranking
        },
        {
          path: 'recommend',
          component: recommend
        },
        {
          path: 'customerService',
          component: customerService
        }
      ]
    },
    {
      path: '/novel/:id',
      name: 'novel',
      component: novel
    },
    {
      path: '/novel/:novelId/:chapter',
      name: 'chapter',
      component: chapter
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
        },
        {
          path: 'bought',
          component: bought
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      redirect: '/admin/userList',
      children: [
        {
          path: 'userList',
          component: userList
        },
        {
          path: 'novelList',
          component: novelList
        },
        {
          path: 'reportList',
          component: reportList
        },
        {
          path: 'feedback',
          component: feedback
        }
      ]
    }
  ]
})
