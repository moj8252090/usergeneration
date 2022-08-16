import Button from "../../general/Button";

function EditableState({ onSave, onCancel }) {
  return (
    <div className="row">
      <div className="col-6">
        <Button variant="outlined" type="button" onClick={onCancel}>
          Abbrechen
        </Button>
      </div>
      <div className="col-6">
        <Button type="button" onClick={onSave}>
          Speichern
        </Button>
      </div>
    </div>
  );
}

export default EditableState;
