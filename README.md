# Explanations

## 1. Which components you created and the purpose of each component:
- Badge - Based on the product's badge it uses different styling
- Cart - A part of Header
- Footer - Handling the footer separately
- Header - Collects everything that belongs to the navigation bar
- MobileMenuButton - 
- Newsletter - Separate unit of the page
- Pagination - Separate unit of the page
- ProductCard - One product's details in one place
- ProductGrid - Handling products
- SearchBar - A part of Header
- SideBarFilters - Handling filters separately
- UserComponent - Separate unit of the page
- App - Holding everything together

## 2. Which props are passed between components?
- `<ProductGrid products={products}/>` we pass products to ProductGrid
- `<ProductCard key={product.id} product={product}/>` we pass product ids and products one by one
- `<Badge badgeType={product.badge.type}/>` we pass badge type to Badge, so it can visualize the right style

## 3. Why you used props?
- Props (short for "properties") are how we pass data from one component to another — making components dynamic and reusable rather than hardcoded. 

## 4. How the components work together?
Think of a component as a self-contained piece of the UI — it has its own structure, its own logic, and its own appearance. Instead of writing an entire page in one large file, we split it into small, focused components. Each component does one thing well and can be reused anywhere in the app. They are nested into each other, forming a tree. 