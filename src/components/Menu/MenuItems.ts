export type MenuItem = {
    link: string
    text: string
    icon: string
}

const menuItems: MenuItem[] = [
	{
		text: 'Dashboard',
		link: 'dashboard',
		icon: 'dashboard'
	},
	{
		text: 'Profile',
		link: 'profile',
		icon: 'profile'
	},
	{
		text: 'Transactions',
		link: 'transactions',
		icon: 'transactions'
	},
	{
		text: 'Categories',
		link: 'categories',
		icon: 'categories'
	},
	{
		text: 'Accounts',
		link: 'accounts',
		icon: 'accounts'
	}
]

export default menuItems