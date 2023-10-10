export interface UserCase<Input, Output>{
    execute(payload?: Input): Promise <Output>;
}