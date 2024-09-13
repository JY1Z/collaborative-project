

import BookCollectionManager from './components/BookCollectionManager';
import ShoppingCart from './components/ShoppingCart';
import RecipeManager from './components/RecipeManager';
import  ContactListManager from './components/ContactListManager';

function App() {
  return (
    <>
     <ShoppingCart />
     <BookCollectionManager />
     <RecipeManager />
    <ContactListManager/>
    </>
  );
}

export default App;
