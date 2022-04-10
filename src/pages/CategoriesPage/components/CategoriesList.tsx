import React from 'react';
import CategoryLabel from "./CategoryLabel";
import {Category} from "../../../redux/categoriesList/types";
import styles from "../styles/CategoriesList.module.scss"

type CategoriesListProps = {
    categories: Category[]
    selectedId: number | null
    onClick: (id: number) => void
}

const CategoriesList: React.FC<CategoriesListProps> = ({categories, selectedId = null, onClick}) => {
    return (
        <div className={styles.categories__list}>
            {
                categories.map(category => <CategoryLabel
                selected={selectedId === category.category_id}
                key={category.category_id}
                category={category}
                onClick={onClick}/>)
            }
        </div>
    );
};

export default CategoriesList;
