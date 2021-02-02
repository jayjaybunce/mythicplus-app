import { createContext } from 'react';

const defContext = {
  achievement_points: 0,
  name: '',
  region: '',
  active_spec_name: '',
  active_spec_role: '',
  class: '',
  faction: '',
  gender: '',
  honorable_kills: 0,
  last_crawled_at: '',
  mythic_plus_best_runs: [],
  gear: {
    item_level_equipped: 0,
    item_level_total: 0,
    artifact_traits: 0,
    corruption: {
      added: 0,
      resisted: 0,
      total: 0,
      cloakRank: 0,
      spells: [],
    },
    items: [],
  },
};

const CharacterContext = createContext();

export default CharacterContext;
