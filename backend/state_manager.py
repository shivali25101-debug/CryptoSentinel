from copy import deepcopy
from state import app_state


class StateManager:
    def __init__(self):
        self.reset()

    # ---------------------------------------
    # Return entire state
    # ---------------------------------------

    def get_state(self):
        return self._state

    # ---------------------------------------
    # Reset everything
    # ---------------------------------------

    def reset(self):
        self._state = deepcopy(app_state)

    # ---------------------------------------
    # Read nested value
    # Example:
    # get("vm1.connection.status")
    # ---------------------------------------

    def get(self, path):

        keys = path.split(".")

        value = self._state

        for key in keys:
            value = value[key]

        return value

    # ---------------------------------------
    # Update nested value
    # Example:
    # update("vm1.connection.status","Connected")
    # ---------------------------------------

    def update(self, path, value):

        keys = path.split(".")

        data = self._state

        for key in keys[:-1]:
            data = data[key]

        data[keys[-1]] = value

    # ---------------------------------------
    # Increment nested integer
    # ---------------------------------------

    def increment(self, path, amount=1):

        current = self.get(path)

        self.update(path, current + amount)

    # ---------------------------------------
    # Append item to list
    # ---------------------------------------

    def append(self, path, value):

        self.get(path).append(value)

    # ---------------------------------------
    # Keep only last N items
    # ---------------------------------------

    def trim(self, path, limit):

        items = self.get(path)

        self.update(path, items[-limit:])


state_manager = StateManager()