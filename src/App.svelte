<section class="calculator">
  <div class="display"><span>123</span></div>

  <div class="buttons">
    <button class="b-clear"> AC </button>
    <button class="b-extra"> +/- </button>
    <button class="b-percentage"> % </button>
    <button class="b-divide"> ÷ </button>

    <button class="b-7"> 7 </button>
    <button class="b-6"> 8 </button>
    <button class="b-9"> 9 </button>
    <button class="b-multiply"> × </button>

    <button class="b-4"> 4 </button>
    <button class="b-5"> 5 </button>
    <button class="b-6"> 6 </button>
    <button class="b-minus"> - </button>

    <button class="b-1"> 1 </button>
    <button class="b-2"> 2 </button>
    <button class="b-3"> 3 </button>
    <button class="b-plus"> + </button>

    <button class="b-0"> 0 </button>
    <button class="b-decimal"> . </button>
    <button class="b-equals"> = </button>
  </div>
</section>

<style>
  .calculator {
    background-color: rgb(227, 227, 226);
    border-radius: 24px;
    padding: 16px;
  }

  .display {
    height: 200px;
    background-color: rgb(54 48 83);
    margin: 4px;
    border-radius: 16px;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    padding: 10px;
    font-size: 2rem;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 90px);
    width: max-content;
  }

  button {
    height: 70px;
    width: 70px;
    background-color: rgb(227, 227, 226);
    font-family: "Jetbrains Mono", monospace;
    font-size: 30px;
    color: rgb(51, 52, 80);
    display: grid;
    border-radius: 100%;
    text-align: center;
    margin: 10px;
    place-items: center;
    transition: all 200ms ease-in;
  }

  button:hover {
    background-color: #f9f9ff;
  }

  .b-clear {
    background-color: #f9f9ff;
  }

  .b-equals:hover {
    background-color: rgb(54 48 83);
    box-shadow: 0px 7px 8px -4px rgb(0 0 0 / 20%),
      0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%);
  }

  .b-equals {
    grid-column: 3 / span 2;
    grid-row: 5;
    border-radius: 50px;
    width: auto;
    background-color: rgb(54 48 83);
    color: rgb(221, 220, 220);
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
      0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    transition: all 250ms ease-in;
  }
</style>
