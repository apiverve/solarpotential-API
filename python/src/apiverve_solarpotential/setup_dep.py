from setuptools import setup, find_packages

setup(
    name='apiverve_solarpotential',
    version='1.1.12',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Solar Potential is a simple tool for getting the estimated annual energy production of a PV system. It returns the estimated annual energy production of a PV system.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
