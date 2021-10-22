/// <reference types="node" />
import { EventEmitter } from "events";
import { Keys, Callback } from "@onebro/oba-common";
export declare type OBACoreEmitterConfig = {};
export declare type OBACoreEmitterType<T> = {
    _emitter: EventEmitter;
    _history: {
        event: Partial<T>;
        time: Date;
    }[];
    _values: Partial<T>;
    on<k extends Keys<T>>(s: k, l: Callback<T[k]>): void;
    emit<k extends Keys<T>>(s: k, v: T[k]): void;
};
