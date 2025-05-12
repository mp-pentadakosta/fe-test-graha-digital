export interface ModelToDoList {
  code: string;
  message: string;
  result: ResultModelToDoList;
}

export interface ResultModelToDoList {
  listData: ListDatumModelToDoList[];
}

export interface ListDatumModelToDoList {
  id: number;
  title: string;
  groupName: string;
  description: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

// Converts JSON strings to/from your types
export class ConvertModelToDoList {
  public static toModelToDoList(json: string): ModelToDoList {
    return JSON.parse(json);
  }

  public static modelToDoListToJson(value: ModelToDoList): string {
    return JSON.stringify(value);
  }
}

//=========================================================================detail=========================================================================

export interface ModelToDoDetail {
  code: string;
  message: string;
  result: ResultModelToDoDetail;
}

export interface ResultModelToDoDetail {
  data: DataModelToDoDetail;
}

export interface DataModelToDoDetail {
  id: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

// Converts JSON strings to/from your types
export class ConvertModelToDoDetail {
  public static toModelToDoDetail(json: string): ModelToDoDetail {
    return JSON.parse(json);
  }

  public static modelToDoDetailToJson(value: ModelToDoDetail): string {
    return JSON.stringify(value);
  }
}
