
export interface HgResponse {
    user: User;
    page?: unknown;
    success: 0 | 1;
    active_turn?: boolean;
}

export interface User {
    user_id: number;
    unique_hash: string;
    num_active_turns: number;
    next_activeturn_seconds: number;
    base_name: string;
    base_item_id: number;
    weapon_name: string;
    weapon_item_id: number;
    trinket_name: string | null;
    trinket_item_id: number | null;
    bait_name: string;
    bait_item_id: number;
    trap_power: number;
    trap_power_bonus: number;
    trap_luck: number;
    trap_attraction_bonus: number;
    has_shield: boolean;
    environment_name: string;
    environment_id: number;
    quests: Quests;
    enviroment_atts: EnvironmentAttributes;
    environment_atts?: EnvironmentAttributes;
    viewing_atts: ViewingAttributes;
}

// TODO: Define needed interfaces for quests in /types/quests/<QuestName>.ts
export interface Quests {
    QuestAncientCity?: any
    QuestBalacksCove?: any
    QuestClawShotCity?: any
    QuestForbiddenGrove?: any
    QuestForewordFarm?: any
    QuestFortRox?: any
    QuestHarbour?: any
    QuestIceberg?: any
    QuestLabyrinth?: any
    QuestLivingGarden?: any
    QuestLostCity?: any
    QuestMousoleum?: any
    QuestMoussuPicchu?: any
    QuestPollutionOutbreak?: any
    QuestQuesoGeyser?: any
    QuestRiftBristleWoods?: any
    QuestRiftBurroughs?: any
    QuestRiftFuroma?: any
    QuestRiftWhiskerWoods?: any
    QuestSandDunes?: any
    QuestSunkenCity?: any
    QuestSuperBrieFactory?: any
    QuestTableOfContents?: any
    QuestTrainStation?: any
}

export interface EnvironmentAttributes {

}

export interface ViewingAttributes {

}
