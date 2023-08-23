import { mitt } from "@sakana/mitt";

type Emitter = {
  count: number;
  addUser: {
    username: string;
    age: number;
  };
};
const emitter = mitt<Emitter>();

export default emitter;
