import Button from "../../general/Button";

function UserGenerationState({ onGenerate, loading }) {
  return (
    <div className="row">
      <div className="col-12">
        <Button disabled={loading} type="button" onClick={onGenerate}>
          User generieren
        </Button>
      </div>
    </div>
  );
}

export default UserGenerationState;
