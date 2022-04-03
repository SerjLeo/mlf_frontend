import React, {useEffect} from 'react';
import useTypedSelector from "../../hooks/useTypedSelector";
import useCategoryActions from "../../hooks/actions/useCategoryActions";
import {useParams} from "react-router-dom";
import styles from "./styles/CategoryPage.module.scss"
import EditTextInput from "../../components/EditTextInput/EditTextInput";

const CategoryPage = () => {
    const {getCategoryById, updateCategory} = useCategoryActions()
    const {categoryId} = useParams()
    const {name, loading, color} = useTypedSelector(state => state.category)

    const onFieldChange = (name: string) => (value: string | number) => {
        updateCategory(Number(categoryId), {name: value})
    }

    useEffect(() => {
        getCategoryById(Number(categoryId))
    }, [getCategoryById, categoryId])
    return (
        <div className={styles.category_page__wrap}>
            <div className={styles.category_page__info}>
                <h2>Info</h2>
                <div>
                    {name && <div className={styles.category_page__name}>Name: <EditTextInput initialValue={name} onValueChange={onFieldChange('name')}/></div>}
                    <div>Color: {color}</div>
                </div>
            </div>
            <div className={styles.category_page__transactions}>
                <h2>Transactions</h2>
                <div>list of transactions</div>
            </div>
        </div>
    );
};

export default CategoryPage;
