import HomePoster from "./HomePoster";

const Home = () => {
    return (
      <div>
        <div className="bg-red-200"><img src="./img/pizzabg.png" alt="" /></div>
        <div className="main-pizza bg-red-200">
        <div className="main-block">
            <img  className="h-[414px] w-[622px]"src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/hut125.a38f7fcc25079be277ec132fe92d4516.1.jpg" alt="" />
            
            <div className="bg-red-300 rounded-2xl">
                <p class="main-p max-w-[622px] bg-red-300" >A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier</p>
                <button class="btn  ml-[207px]" >Buy now</button>

            </div>
        </div>
        <div className="main-block ">
            <img  className="h-[414px] w-[622px]"src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/hut300.312236d18a76801105b271168dc4fab9.1.jpg" alt="" />
            
            <div className="bg-red-300 rounded-2xl">
                <p class="main-p max-w-[622px] bg-red-300" >Choose your favourite non-veg pizzas from the Domino's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings</p>
                <button class="btn ml-[207px]" >Buy Now</button>

            </div>
        </div>
        
        
    </div>
    {/* <div className="main-pizza bg-red-200">
        <div className="main-block">
            <img  className="h-[414px] w-[622px]"src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/hut125.a38f7fcc25079be277ec132fe92d4516.1.jpg" alt="" />
            
            <div className="bg-red-300 rounded-2xl">
                <p class="main-p max-w-[622px] bg-red-300" >A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier</p>
                <button class="btn  ml-[207px]" >Buy now</button>

            </div>
        </div>
        <div className="main-block ">
            <img  className="h-[414px] w-[622px]"src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/hut300.312236d18a76801105b271168dc4fab9.1.jpg" alt="" />
            
            <div className="bg-red-300 rounded-2xl">
                <p class="main-p max-w-[622px] bg-red-300" >Choose your favourite non-veg pizzas from the Domino's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings</p>
                <button class="btn ml-[207px]" >Buy Now</button>

            </div>
        </div>
        
        
    </div> */}
        
        <HomePoster/>
      </div>
    );
  };
  
  export default Home;