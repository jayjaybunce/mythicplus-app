export type Affix = {
  description: string;
  id: number;
  name: string;
  wowhead_url: string;
};
export type Run = {
  affixes: Affix[];
  clear_time_ms: number;
  completed_at: string;
  dungeon: string;
  map_challenge_mode_id: string;
  score: number;
  short_name: string;
  url: string;
  num_keystone_upgrades: number;
  mythic_level: number;
};

export type CharacterInformation = {
  achievement_points: number;
  region: string;
  active_spec_name: string;
  active_spec_role: string;
  class: string;
  faction: string;
  gender: string;
  honorable_kills: number;
  last_crawled_at: string;
  mythic_plus_best_runs: Run[];
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
};

export type Search = {
  realm: string;
  name: string;
};

export type Context = {
  user: User | null;
  searches: Search[] | [];
};
