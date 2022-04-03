import {CategoryState} from "./types";

const CategoryStateFactory: () => CategoryState = () => ({
    category_id: null,
    name: '',
    color: '',
    created_at: null,
    loading: true,
    error: ''
})

export default CategoryStateFactory
