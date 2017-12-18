import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    navigation: [
      {
        id: 'AZ',
        name: 'sortation',
        url: 'patient-list',
        title: 'Patienten-Liste',
        collection: 'patient',
        icon: 'sort-alpha-asc',
        group: false,
        filter: {
          status: 1
        },
        filterBox: [{
            type: 'text',
            value: 'label'
        }]
      },
      {
        id: 'group',
        name: 'group',
        url: 'patient-list',
        title: 'Patienten-Liste',
        collection: 'patient',
        icon: 'object-group',
        group: true
      },
      {
        id: 'archive',
        name: 'archive',
        url: 'patient-list-archived',
        title: 'Liste der archivierten Patienten',
        collection: 'patient',
        icon: 'archive',
        group: false,
        filter: {
          status: 0
        }
      }
    ],
    collections: {
      patient: []
    },
    activeTab: {
        id: 'AZ',
        name: 'sortation',
        url: 'patient-list',
        title: 'Patienten-Liste',
        collection: 'patient',
        icon: 'sort-alpha-asc',
        group: false,
        filter: {
            status: 1
        },
        filterBox: [{
            type: 'text',
            value: 'label'
        }]
    },
    patientFiltered: [],
    cursor: {
      current: 0,
      limit: 10
    }
  },
  getters: {
    patient: state => {
      return state.collections.patient;
    },
    navigation: state => {
        return state.navigation;
    },
    activeTab: state => {
        return state.activeTab;
    },
    patientFiltered: state => {
      return state.patientFiltered;
    }
  },
  mutations: {
    setCollection(state, { type, items }) {
      state['collections'][type] = items;
    },
    setActiveTab(state, value) {
      Vue.localStorage.set('activeTab', JSON.stringify(value));
      state['activeTab'] = value;
    },
    setPatientFiltered(state) {
      let filter = state.activeTab.filter;
      let data;

      if (filter && filter.status >= 0) {
        data = state.collections.patient.filter(patient => {
          return patient.status == filter.status;
        });
      } else {
        data = state.collections.patient;
      }

      state['patientFiltered']= data;
    }
  },
  actions: {
    updateStorage({ commit }) {
      Vue.http.get(Routing.generate('api_patients_ds')).then(response => {
        const results = response.body.patient;
        commit('setCollection', { type: 'patient', items: results });
        commit('setPatientFiltered');
      }, err => {
        throw err;
      });
    },
    filterPatient({ commit, dispatch }, params) {
      commit('setActiveTab', params);
      commit('setPatientFiltered');
    },
    initActiveTab({ commit, dispatch }) {
      const tab = Vue.localStorage.get('activeTab');

      if (tab) {
        commit('setActiveTab', JSON.parse(tab));
      }
    }
  }
})

export default store;