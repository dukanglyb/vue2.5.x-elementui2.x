const adminMenu= [
	{name: "概览", id: '1', path: "/dashboard",icon:'fa-tachometer-alt',noDropdown:false,isEnabled:true, children:[]},
	{name: "基础组件", id: '2', path: "/basemodule",icon: 'fa-th-large',noDropdown:true,isEnabled:true, children: [
		{name: "Button按钮", id: '21', path: "/buttons", parentId: '2',noDropdown:false,isEnabled:true,children:[]},
		{name: "Icon图标", id: '22', path: "/icons", parentId: '2',noDropdown:false,isEnabled:true,children:[]},
		{name: "Tabs页签", id: '23', path: "/tabs", parentId: '2',noDropdown:false,isEnabled:true,children:[]},
		{name: "Tree控件", id: '24', path: "/tree", parentId: '2',noDropdown:false,isEnabled:true,children:[]},
	]},
	{name: "Forms组件", id: '3', path: "/forms",icon: 'fa-cubes',noDropdown:true,isEnabled:true, children: [
		{name: "Input 输入框", id: '31', path: "/input", parentId: '3',noDropdown:false,isEnabled:true,children:[]},
		{name: "Select 选择框", id: '32', path: "/select", parentId: '3',noDropdown:false,isEnabled:true,children:[]},
		{name: "Transfer 穿梭框", id: '33', path: "/transfer", parentId: '3',noDropdown:false,isEnabled:true,children:[]},
	]},
	{name: "Data组件", id: '4', path: "/datas",icon: 'fa-database',noDropdown:true,isEnabled:true, children: [
		{name: "Table 表格", id: '41', path: "/table", parentId: '4',noDropdown:false,isEnabled:true,children:[]},
	]},
	{name: "错误页", id: '5', path: "/errorpage",icon: 'fa-bug',noDropdown:true,isEnabled:true, children: [
		{name: "401错误页", id: '51', path: "/401", parentId: '5',noDropdown:false,isEnabled:true,children:[]},
		{name: "404错误页", id: '52', path: "/404", parentId: '5',noDropdown:false,isEnabled:true,children:[]},
	]},
]
export default adminMenu
