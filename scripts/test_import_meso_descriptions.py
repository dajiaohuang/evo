import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location('meso', Path(__file__).with_name('import-meso-descriptions.py'))
meso = importlib.util.module_from_spec(spec)
spec.loader.exec_module(meso)


class TextConversionTests(unittest.TestCase):
    def test_original_languages_and_measurements(self):
        self.assertEqual(meso.plain_text('<p>Ra&iacute;ces 2&#215;3 mm; &gt;200 flores.</p>'),
                         'Raíces 2×3 mm; >200 flores.')

    def test_nested_entities_do_not_become_tags(self):
        self.assertEqual(meso.plain_text('<p>A &amp;amp; B; &amp;lt;2 mm.</p>'), 'A & B; <2 mm.')

    def test_paragraphs_and_inline_emphasis(self):
        self.assertEqual(meso.plain_text('<P>Leaves <i>rarely</i> hairy.</P><p>Flowers red.</p>'),
                         'Leaves rarely hairy.\n\nFlowers red.')

    def test_incomplete_source_is_not_completed(self):
        self.assertEqual(meso.plain_text('<p>Observed in Chiapas '), 'Observed in Chiapas')


if __name__ == '__main__':
    unittest.main()
