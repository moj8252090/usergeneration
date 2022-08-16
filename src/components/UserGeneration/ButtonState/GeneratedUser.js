import Button from "../../general/Button";

function GeneratedUser({ onSave, onEdit }) {
  return (
    <div className="row">
      <div className="col-6">
        <Button variant="outlined" type="button" onClick={onEdit}>
          Bearbeiten
        </Button>
      </div>
      <div className="col-6">
        <Button type="button" onClick={onSave}>
          User anlegen
        </Button>
      </div>
    </div>
  );
}

export default GeneratedUser;
