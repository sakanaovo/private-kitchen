export type EventType = string | symbol;
export type Handler<T = unknown> = (event: T) => void;
export type EventHandlerList<T = unknown> = Array<Handler<T>>;
export type HandlersMap<Events extends Record<EventType, unknown>> = Map<
  keyof Events,
  EventHandlerList<Events[keyof Events]>
>;
export type Emitter<Events extends Record<EventType, unknown>> = {
  events: HandlersMap<Events>;
  emit?<Key extends keyof Events>(type: Key, event?: Events[Key]): void;
  on?<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
  off<Key extends keyof Events>(
    type: Key,
    handler?: Handler<Events[Key]>
  ): void;
};

export function mitt<Events extends Record<EventType, unknown>>(
  all?: HandlersMap<Events>
): Emitter<Events> {
  const events = all || new Map();

  function on<Key extends keyof Events>(
    type: Key,
    handler: Handler<Events[Key]>
  ) {
    const handles = events.get(type) as EventHandlerList<Events[Key]>;
    const added = handles && handles.push(handler);
    if (!added) {
      events.set(type, [handler]);
    }
  }
  function off<Key extends keyof Events>(
    type: Key,
    handler?: Handler<Events[Key]>
  ) {
    const handlers = events.get(type) as EventHandlerList<Events[Key]>;
    if (handlers) {
      if (handler) {
        // 删除事件处理程序 >>> 0 保证是正整数
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      } else {
        events.set(type, []);
      }
    }
  }

  function emit<Key extends keyof Events>(type: Key, event?: Events[Key]) {
    // 调用事件处理程序
    const handlers = events.get(type) as EventHandlerList<Events[Key]>;
    if (handlers) {
      handlers.forEach((fn: Handler<Events[Key]>) => {
        fn(event!);
      });
    }
  }

  return {
    events,
    on,
    off,
    emit,
  };
}
