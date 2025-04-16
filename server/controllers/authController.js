const ParentModel = require('../models/parentModel');
const ChildModel = require('../models/childModel');

const AuthController = {
  register: async (req, res) => {
    try {
      const { parent, child } = req.body;

      if (!parent || !child) {
        return res.status(400).json({ message: 'Parent and child information are required' });
      }

      const createdParent = await ParentModel.create(parent);
      const childData = { ...child, parent_id: createdParent.parent_id };
      const createdChild = await ChildModel.create(childData);

      res.status(201).json({
        message: 'Registration successful',
        parent: createdParent,
        child: createdChild
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // ✅ Unified login for parent or child
  login: async (req, res) => {
    try {
      const { email, phone } = req.body;

      if (!email && !phone) {
        return res.status(400).json({ message: 'Email or phone is required' });
      }

      // Try parent first
      const parents = await ParentModel.getAll();
      const parent = parents.find(
        (p) => p.email === email || p.phone === phone
      );

      if (parent) {
        return res.status(200).json({
          message: 'Login successful as parent',
          role: 'parent',
          user: parent
        });
      }

      // Try child
      const children = await ChildModel.getAll();
      const child = children.find(
        (c) => c.email === email || c.phone === phone
      );

      if (child) {
        return res.status(200).json({
          message: 'Login successful as child',
          role: 'child',
          user: child
        });
      }

      // Neither found
      return res.status(401).json({ message: 'Invalid credentials' });

    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  // Add a new child to an existing parent


  addChild:async (req, res) => {
  try {
    const parent_id = parseInt(req.params.parentId);

    const data = {
      parent_id,
      name: req.body.name ?? null,
      gender: req.body.gender ?? null,
      birth_date: req.body.birth_date ?? null,
      grade: req.body.grade ?? null,
      address: req.body.address ?? null,
      state: req.body.state ?? null,
      city: req.body.city ?? null,
      zip_code: req.body.zip_code ?? null,
      email: req.body.email ?? null,
      phone: req.body.phone ?? null,
      special_case: req.body.special_case ?? null,
      schedule_availability: req.body.schedule_availability ?? null
    };

    const child = await ChildModel.create(data);
    res.status(201).json(child);
  } catch (error) {
    console.error('Add child error:', error);
    res.status(500).json({ message: 'Failed to add child', error });
  }
},


updateParentAndChild:async (req, res) => {
  try {
    const { parentId, childId } = req.params;
    const { parent, child } = req.body;

    // Update parent if parent object is provided
    if (parent) {
      const updateData = {
        name: parent.name ?? undefined,
        gender: parent.gender ?? undefined, // Ensure gender is not null
        email: parent.email ?? undefined,
        phone: parent.phone ?? undefined,
        address: parent.address ?? undefined,
        state: parent.state ?? undefined,
        city: parent.city ?? undefined,
        zip_code: parent.zip_code ?? undefined
      };

      // Validate that 'gender' and 'name' are provided, as they are required
      if (!updateData.gender) {
        return res.status(400).json({ message: "'gender' is required for updating parent." });
      }

      if (!updateData.name) {
        return res.status(400).json({ message: "'name' is required for updating parent." });
      }

      await ParentModel.update(parentId, updateData);
    }

    // Update child if child object is provided
    if (child) {
      const updateChildData = {
        name: child.name ?? undefined,
        gender: child.gender ?? undefined, // Ensure gender is not null
        birth_date: child.birth_date ?? undefined,
        grade: child.grade ?? undefined,
        address: child.address ?? undefined,
        state: child.state ?? undefined,
        city: child.city ?? undefined,
        zip_code: child.zip_code ?? undefined,
        email: child.email ?? undefined,
        phone: child.phone ?? undefined,
        special_case: child.special_case ?? undefined,
        schedule_availability: child.schedule_availability ?? undefined
      };

      // Validate that 'gender' is provided for child as well
      if (!updateChildData.gender) {
        return res.status(400).json({ message: "'gender' is required for updating child." });
      }

      await ChildModel.update(childId, updateChildData);
    }

    res.status(200).json({ message: 'Parent and/or child updated successfully' });
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: 'Update failed', error });
  }
}

  
};

module.exports = AuthController;
