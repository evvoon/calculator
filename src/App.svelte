<script>
  let numberInput = "";
  let output = 0;

  function formatOutput(output = 0) {
    console.log({ output });
    return output % 1 !== 0 ? parseFloat(output + "").toPrecision(4) : output;
  }
  function addToEquation(value) {
    if (numberInput === "") {
      if (["+", "-", "/", "*", "%"].includes(value)) {
        numberInput = output + value;
        return;
      }
    }
    numberInput += value;
  }

  function result() {
    if (!isNaN(+numberInput.slice(-1))) return eval(numberInput);
    return eval(numberInput.slice(0, -1));
  }

  function calculate() {
    if (numberInput !== "") output = result().toString();
    numberInput = "";
  }
</script>

<section class="calculator">
  <div class="display">
    <div class="input">{numberInput || formatOutput(output)}</div>
  </div>

  <div class="buttons">
    <button
      class="b-clear"
      on:click={() => {
        numberInput = "";
        output = 0;
      }}
    >
      AC
    </button>
    <button class="b-extra"> +/- </button>
    <button class="b-percentage" on:click={() => addToEquation("%")}>
      %
    </button>
    <button class="b-divide" on:click={() => addToEquation("/")}> ÷ </button>

    <button class="b-7" on:click={() => addToEquation("7")}> 7 </button>
    <button class="b-6" on:click={() => addToEquation("8")}> 8 </button>
    <button class="b-9" on:click={() => addToEquation("9")}> 9 </button>
    <button class="b-multiply" on:click={() => addToEquation("*")}> × </button>

    <button class="b-4" on:click={() => addToEquation("4")}> 4 </button>
    <button class="b-5" on:click={() => addToEquation("5")}> 5 </button>
    <button class="b-6" on:click={() => addToEquation("6")}> 6 </button>
    <button class="b-minus" on:click={() => addToEquation("-")}> - </button>

    <button class="b-1" on:click={() => addToEquation("1")}> 1 </button>
    <button class="b-2" on:click={() => addToEquation("2")}> 2 </button>
    <button class="b-3" on:click={() => addToEquation("3")}> 3 </button>
    <button class="b-plus" on:click={() => addToEquation("+")}> + </button>

    <button class="b-0" on:click={() => addToEquation("0")}> 0 </button>
    <button class="b-decimal" on:click={() => addToEquation(".")}> . </button>
    <button class="b-equals" on:click={() => calculate()}> = </button>
  </div>
</section>

<style>
  .calculator {
    background-color: rgb(227, 227, 226);
    border-radius: 24px;
    padding: 16px;
    width: max-content;
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
