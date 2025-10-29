import Button from "./Button";
import "../App.css";

const ButtonGrid = ({
  onNumberClick,
  onOperatorClick,
  onClear,
  onDelete,
  onEquals,
}) => {
  return (
    <div className="buttons-grid">
      {/* Row 1 */}
      <Button label="C" onClick={onClear} className="op" />
      <Button label="DEL" onClick={onDelete} className="op" />
      <Button label="÷" onClick={onOperatorClick} className="op" />
      <Button label="×" onClick={onOperatorClick} className="op" />

      {/* Row 2 */}
      <Button label="7" onClick={onNumberClick} className="num" />
      <Button label="8" onClick={onNumberClick} className="num" />
      <Button label="9" onClick={onNumberClick} className="num" />
      <Button label="-" onClick={onOperatorClick} className="op" />

      {/* Row 3 */}
      <Button label="4" onClick={onNumberClick} className="num" />
      <Button label="5" onClick={onNumberClick} className="num" />
      <Button label="6" onClick={onNumberClick} className="num" />
      <Button label="+" onClick={onOperatorClick} className="op" />

      {/* Row 4 */}
      <Button label="1" onClick={onNumberClick} className="num" />
      <Button label="2" onClick={onNumberClick} className="num" />
      <Button label="3" onClick={onNumberClick} className="num" />
      <Button label="." onClick={onNumberClick} className="num" />
      <Button label="=" onClick={onEquals} className="equals" />

      {/* Row 5 */}
      <Button label="0" onClick={onNumberClick} className="num zero" />
      <Button label="00" onClick={onNumberClick} className="num" />
    </div>
  );
};

export default ButtonGrid;
