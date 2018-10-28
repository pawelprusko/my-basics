document.addEventListener("DOMContentLoaded", function(event) {
  let foods = [];

  class Food {
      constructor(name, protein, carbs, fat) {
          this.name = name;
          this.protein = protein;
          this.carbs = carbs;
          this.fat = fat;
      }
      addListElement() {
         const ul = document.getElementById("products");
          let li = document.createElement('li');
          ul.appendChild(li);
          li.innerHTML = this.name;
      }
      addToTableAndDisplay() {
          foods.push(this);
          console.log(foods);
      }
  }

  class FastFood extends Food {}

  class FatFreeFood extends Food {}

  const button = document.querySelector("#add");

  button.addEventListener("click", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value;

      const proteins = document.getElementById("proteins").value;
      const proteinsValue = proteins.replace(/\D/g,'');

      const carbs = document.getElementById("carbs").value;
      const carbsValue = carbs.replace(/\D/g,'');

      const fat = document.getElementById("fat").value;
      const fatValue = fat.replace(/\D/g,'');

      const calories = proteinsValue*4 + carbsValue*4 + fatValue*9;

      let obiadek;

      if (calories > 250) {
          obiadek = new FastFood(name, proteinsValue, carbsValue, fatValue);
      }else {
          obiadek = new FatFreeFood(name, proteinsValue, carbsValue, fatValue);
      }

      obiadek.addListElement();
      obiadek.addToTableAndDisplay();

  });

});
