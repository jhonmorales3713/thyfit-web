export class ItemType {
    id: number;
    name: string;
    status: string;
    constructor() {
    }
    format(payload: any) {
      
      payload["data"].forEach(data => {
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
      });
      return this;
    }
}
