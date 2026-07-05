# state_manager.py

from copy import deepcopy
from state import app_state


class StateManager:
    def __init__(self):
        self._state = deepcopy(app_state)

    def get_state(self):
        return self._state

    def update(self, key, value):
        if key in self._state:
            self._state[key] = value

    def increment(self, key, amount=1):
        if key in self._state:
            self._state[key] += amount

    def append_alert(self, alert):
        self._state["alerts"].append(alert)

    def trim_alerts(self, limit=15):
        self._state["alerts"] = self._state["alerts"][-limit:]

    def clear_alerts(self):
        self._state["alerts"] = []

    def reset(self):
        self._state = deepcopy(app_state)


state_manager = StateManager()