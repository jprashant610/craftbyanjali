# 🎨 Craft By Anjali - Rangoli Patches E-Commerce

A beautiful, fancy e-commerce website for rangoli patches with a complete shopping experience. Built with HTML, CSS, and JavaScript.

## Features

### 🏠 Multi-Page Website
- **Home Page** - Beautiful landing page with hero section, features, and call-to-action
- **Items Page** - 50+ rangoli patches with search and sorting functionality
- **About Us** - Story of the brand and artisan
- **Contact Us** - Contact methods, FAQ, and contact form

### 🛒 Shopping Cart System
- Add/remove patches from cart
- Real-time cart count display
- Cart persists using localStorage
- View cart summary with total price

### 📦 Product Details
- 50 unique rangoli patch designs
- Price display (₹)
- Dimension details (e.g., 4" x 4")
- Emoji representations for visual appeal
- Material information

### 🤖 WhatsApp Integration
- One-click ordering through WhatsApp
- Automatic order summary generation
- Direct link to WhatsApp chat
- Easy customization of WhatsApp number

### 🎨 Modern UI/UX
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Gradient color scheme
- Professional styling
- Intuitive navigation

### 🔍 Search & Filter
- Real-time search functionality
- Sort by name or price
- Filter results dynamically

## File Structure

```
craftbyanjali/
├── index.html          # Home page
├── items.html          # Products page
├── about-us.html       # About page
├── contact-us.html     # Contact page
├── style.css           # Main stylesheet
├── script.js           # Shared functionality
├── items.js            # Items page functionality
├── images/             # Product images folder
└── README.md           # This file
```

## How to Use

### 1. Setup
- No installation required! Just a web server to serve the files.
- Can be hosted on GitHub Pages, Netlify, Vercel, or any web host.

### 2. Configure WhatsApp Number
Edit the WhatsApp number in `items.js`:

```javascript
// Line 227 - Replace with your actual WhatsApp number
const whatsappNumber = '919876543210'; // Update this!
```

### 3. Add Product Images
Place product images in the `images/` folder (optional - emoji representations are used by default).

### 4. Customize Content
- Update business name, contact details, and descriptions in the HTML files
- Modify color scheme in `style.css` (CSS variables at the top)
- Add your phone number and email in contact pages

## Product Data

50 rangoli patches are pre-loaded with:
- **Patch Names** - Creative names for each design
- **Prices** - Ranging from ₹159 to ₹399
- **Dimensions** - From 2"x2" to 6"x6"
- **Emojis** - Visual representation of each patch design

To modify products, edit the `rangoliPatches` array in `items.js`.

## Features in Detail

### Shopping Cart
- Stored in browser's localStorage
- Persists across page refreshes
- Display cart item count in navigation
- Easy add/remove functionality

### WhatsApp Order
When customer clicks "Place Order on WhatsApp":
1. Order summary is generated with all items
2. Total price is calculated
3. WhatsApp link is opened with pre-filled message
4. Customer can confirm and proceed with payment

Example message format:
```
Hi! 👋

I would like to order the following Rangoli Patches from Craft By Anjali:

1. 🌸 Traditional Lotus (4" x 4") - ₹299
2. ⭐ Star Burst (4" x 4") - ₹289

📊 Total Amount: ₹588

Please confirm the order and provide payment details.
```

### Responsive Design
- **Desktop**: Full layout with all features
- **Tablet**: Optimized grid and navigation
- **Mobile**: Single column layout, stacked navigation

## Color Scheme

- **Primary Color**: #ff6f61 (Coral Red)
- **Secondary Color**: #ffa500 (Orange)
- **Accent Color**: #8b4513 (Brown)
- **Light Background**: #fff8f0 (Cream)

## Browser Support

- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Customization Guide

### Change Business Name
1. Update "Craft By Anjali" text in all HTML files
2. Update in CSS if coloring is applied

### Add More Products
Edit `items.js` - add to the `rangoliPatches` array:
```javascript
{ id: 51, name: 'New Patch Name', price: 299, dimensions: '4" x 4"', emoji: '🎨' }
```

### Modify Prices
Update individual items in `rangoliPatches` array or create a pricing tier system.

### Change Colors
Update CSS variables in `style.css`:
```css
:root {
    --primary-color: #ff6f61;
    --secondary-color: #ffa500;
    --accent-color: #8b4513;
    --light-bg: #fff8f0;
}
```

### Update Contact Information
Edit `contact-us.html`:
- WhatsApp link: `https://wa.me/919876543210`
- Email: Update mailto link
- Phone: Update tel link

## JavaScript Functions

### Cart Management
- `getCart()` - Retrieve cart from localStorage
- `saveCart(cart)` - Save cart to localStorage
- `updateCartCount()` - Update cart count display
- `addToCart(patchId)` - Add patch to cart
- `removeFromCart(patchId)` - Remove patch from cart
- `showCartModal()` - Display cart modal
- `placeOrderOnWhatsApp()` - Generate WhatsApp order link

### Search & Filter
- `handleSearch(e)` - Filter patches by search term
- `handleSort(e)` - Sort patches by name or price
- `displayProducts()` - Render product grid

## Deploy on GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch as source (main or gh-pages)
4. Your site will be live at `username.github.io/craftbyanjali`

## Performance Optimization

- Lightweight CSS (no frameworks)
- Vanilla JavaScript (no dependencies)
- LocalStorage for cart persistence
- Emoji representations (no image loading needed by default)
- Responsive images with proper sizing

## Future Enhancements

- Integration with payment gateway
- Admin panel for managing products
- Order tracking system
- Customer reviews
- Wishlist feature
- Email notifications
- Analytics integration

## Support

For issues or questions:
1. Check the FAQ section in Contact Us page
2. Contact via WhatsApp through the website
3. Update contact information as needed

## License

This project is created for Craft By Anjali. Modify and use as needed.

---

**Made with ❤️ for Craft By Anjali**