const RecipeList = ({ recipes, handleRecipeSelect }) => {
	return (
		<div className="flex flex-wrap justify-center">
			{/* TODO: Listázd ki az összes receptet */}
			{/* TODO: A receptre kattintáskor változzon meg az állapotváltozó értéke a receptre */}
			{recipes.map((recipe) => (
				<div
					onClick={() => handleRecipeSelect(recipe)}
					key={recipe.name}
					className="max-w-sm rounded flex flex-col overflow-hidden shadow-lg m-5 bg-blue-300"
				>
					<img
						className="w-full h-200px object-cover"
						src={recipe.image}
						alt="Recipe"
					/>
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">{recipe.name}</div>
						<p className="text-gray-700 text-base">{recipe.description}</p>
					</div>
					<div className="px-6 py-4 mt-auto">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
							{recipe.preparationTime}
						</span>
					</div>
				</div>
			))}
		</div>
	)
}

export default RecipeList
