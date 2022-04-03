import React, {useEffect} from 'react';
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";
import Spinner from '../../components/Spinner/Spinner';
import useCategoriesListActions from "../../hooks/actions/useCategoriesListActions";
import useTypedSelector from "../../hooks/useTypedSelector";
import styles from "./style/CategoriesPage.module.scss"
import CategoriesList from "./components/CategoriesList";

const CategoriesPage = () => {
    const {getCategoriesList} = useCategoriesListActions()
    const navigate = useNavigate()
    const {categoryId} = useParams()
    const {categories, loading} = useTypedSelector(state => state.categoriesList)

    useEffect(() => {
        getCategoriesList()
    }, [getCategoriesList])

    const handleLabelClick = (id: number) => {
        navigate(`/categories/${id}`)
    }

    const categoriesList = () => (
        <div className={styles.categories__wrap}>
            {
                categories?.length
                    ? <CategoriesList onClick={handleLabelClick} selectedId={Number(categoryId)} categories={categories}/>
                    : <div className={styles.categories__no_data}>No categories found. <Link to='create' className={styles.categories__link}>Create</Link> one.</div>
            }
        </div>
    )

    return (
        <div>
            <h2>Categories</h2>
            { loading ? <Spinner/> :categoriesList() }
            <div className={styles.category_page__wrap}>
                <Outlet/>
            </div>
        </div>
    );
};

export default CategoriesPage;
