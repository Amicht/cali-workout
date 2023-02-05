export interface Language {
    btn_name: string;
    modal_title: string;
    close_btn: string;
}

export interface Navbar {
    icon: string;
    home: string;
    get_started: string;
    language: Language;
}

export interface Title {
    txt: string;
    ishighlighted: boolean;
}

export interface HomeScreen {
    route: string;
    title: Title[];
    subtitle: string;
    actionBtns: string[];
}

export interface Title2 {
    txt: string;
    ishighlighted: boolean;
}

export interface Plan {
    name: string;
    price: number;
    features: string[];
}

export interface PlansScreen {
    route: string;
    title: Title2[];
    subtitle: string;
    plans: Plan[];
}

export interface Title3 {
    txt: string;
    ishighlighted: boolean;
}

export interface MuscleGroup {
    name: string;
    muscles: string[];
}

export interface PTitles {
    instructions: string;
    equipment: string;
    difficulty: string;
    muscle: string;
    type: string;
}

export interface ExerciseCard {
    p_titles: PTitles;
}

export interface ModalBtns {
    close: string;
    add: string;
}

export interface ChooseProgramScreen {
    route: string;
    title: Title3[];
    modalTitle: string;
    subtitle: string;
    muscleGroups: MuscleGroup[];
    exerciseCard: ExerciseCard;
    modalBtns: ModalBtns;
}

export interface Title4 {
    txt: string;
    ishighlighted: boolean;
}

export interface Completed {
    title: string;
    subtitle: string;
}

export interface PTitles2 {
    break: string;
    work: string;
    instructions: string;
    completed: Completed;
}

export interface Txts {
    p_titles: PTitles2;
    start: string;
}

export interface Workout {
    route: string;
    title: Title4[];
    txts: Txts;
}

export interface LanguageModel {
    language: string;
    direction: string;
    navbar: Navbar;
    homeScreen: HomeScreen;
    plansScreen: PlansScreen;
    chooseProgramScreen: ChooseProgramScreen;
    workout: Workout;
}

